import { useState, useRef, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Camera, CameraOff, Send, Clock, AlertTriangle } from "lucide-react";

type InterviewStatus = "permission" | "active" | "completed" | "text-only";
type QuestionStatus = "listening" | "recording" | "processing";

const mockQuestions = [
  "Tell us about your most challenging project and how you overcame the obstacles.",
  "How do you approach debugging a complex production issue?",
  "Describe your experience with team collaboration and code reviews.",
  "What's your approach to learning new technologies?",
  "Where do you see yourself contributing most to our team?",
];

const AIInterview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [status, setStatus] = useState<InterviewStatus>("permission");
  const [currentQ, setCurrentQ] = useState(0);
  const [qStatus, setQStatus] = useState<QuestionStatus>("listening");
  const [textAnswer, setTextAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [timer, setTimer] = useState(120);

  // Timer countdown
  useEffect(() => {
    if (status !== "active") return;
    if (timer <= 0) {
      handleSubmitAnswer();
      return;
    }
    const t = setTimeout(() => setTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timer, status]);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setStatus("active");
    } catch {
      setStatus("text-only");
    }
  }, []);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  useEffect(() => {
    return () => stopCamera();
  }, [stopCamera]);

  const toggleMic = () => {
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach((t) => (t.enabled = !t.enabled));
    }
    setMicOn((v) => !v);
  };

  const toggleCam = () => {
    if (streamRef.current) {
      streamRef.current.getVideoTracks().forEach((t) => (t.enabled = !t.enabled));
    }
    setCamOn((v) => !v);
  };

  const handleSubmitAnswer = () => {
    setQStatus("processing");
    const newAnswers = [...answers, textAnswer || "(video/audio response)"];
    setAnswers(newAnswers);
    setTextAnswer("");

    setTimeout(() => {
      if (currentQ < mockQuestions.length - 1) {
        setCurrentQ((c) => c + 1);
        setTimer(120);
        setQStatus("listening");
      } else {
        stopCamera();
        setStatus("completed");
      }
    }, 1500);
  };

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  // PERMISSION MODAL
  if (status === "permission") {
    return (
      <div className="min-h-screen bg-polka-purple flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-background neo-border-thick neo-shadow-lg p-8 max-w-md w-full"
        >
          <div className="w-16 h-16 bg-neo-yellow neo-border-thick mx-auto mb-6 flex items-center justify-center">
            <Camera className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold font-mono text-center mb-2">Allow Camera & Microphone?</h2>
          <p className="text-center text-muted-foreground font-semibold mb-8">
            We need access to record your AI interview for position #{id}
          </p>
          <div className="flex gap-3">
            <button
              onClick={startCamera}
              className="flex-1 py-3 bg-success text-success-foreground neo-border font-bold uppercase neo-hover neo-shadow"
            >
              Allow
            </button>
            <button
              onClick={() => setStatus("text-only")}
              className="flex-1 py-3 bg-destructive text-destructive-foreground neo-border font-bold uppercase neo-hover neo-shadow"
            >
              Deny
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // COMPLETED
  if (status === "completed") {
    return (
      <div className="min-h-screen bg-polka-purple flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-background neo-border-thick neo-shadow-lg p-8 max-w-lg w-full text-center"
        >
          <div className="w-16 h-16 bg-success neo-border-thick mx-auto mb-6 flex items-center justify-center">
            <span className="text-3xl">✓</span>
          </div>
          <h2 className="text-3xl font-bold font-mono mb-2">Interview Complete!</h2>
          <p className="text-muted-foreground font-semibold mb-4">
            You answered {answers.length} of {mockQuestions.length} questions.
          </p>
          <p className="text-sm font-semibold mb-8">Your responses are being processed by our AI system.</p>
          <button
            onClick={() => navigate("/user/track")}
            className="px-8 py-3 bg-primary text-primary-foreground neo-border neo-shadow font-bold uppercase neo-hover"
          >
            Back to Dashboard
          </button>
        </motion.div>
      </div>
    );
  }

  const isTextOnly = status === "text-only";

  return (
    <div className="min-h-screen bg-polka-purple">
      {/* Text-only warning */}
      {isTextOnly && (
        <div className="bg-warning text-warning-foreground neo-border border-t-0 border-x-0 py-2 px-4 flex items-center justify-center gap-2 font-bold text-sm">
          <AlertTriangle className="w-4 h-4" />
          Camera denied — Text-only mode active
        </div>
      )}

      <div className="container mx-auto px-4 py-6">
        {/* SPLIT SCREEN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* LEFT - Camera Feed */}
          <div className="neo-border-thick neo-shadow-lg bg-primary relative overflow-hidden aspect-video">
            {!isTextOnly ? (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ transform: "scaleX(-1)" }}
                />
                {/* REC indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-destructive text-destructive-foreground px-3 py-1 neo-border font-bold text-xs uppercase">
                  <div className="w-2 h-2 rounded-full bg-destructive-foreground animate-pulse" />
                  REC
                </div>
                {/* Label */}
                <div className="absolute bottom-4 left-4 bg-background/90 neo-border px-3 py-1 font-bold text-xs uppercase">
                  YOU (LIVE)
                </div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <div className="text-center">
                  <CameraOff className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="font-bold text-muted-foreground">Camera Disabled</p>
                  <p className="text-sm text-muted-foreground font-semibold">Using text-only mode</p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT - Question Panel */}
          <div className="bg-background neo-border-thick neo-shadow-lg p-6 flex flex-col">
            {/* Timer + Status */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-neo-yellow neo-border font-mono font-bold">
                <Clock className="w-4 h-4" />
                {formatTime(timer)}
              </div>
              <div className={`px-3 py-1 neo-border font-bold text-xs uppercase ${
                qStatus === "listening" ? "bg-neo-blue text-neo-blue-foreground" :
                qStatus === "recording" ? "bg-destructive text-destructive-foreground" :
                "bg-neo-purple text-neo-purple-foreground"
              }`}>
                {qStatus}
              </div>
            </div>

            {/* Progress */}
            <div className="flex gap-1 mb-6">
              {mockQuestions.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 neo-border ${
                    i < currentQ ? "bg-success" : i === currentQ ? "bg-neo-yellow" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <p className="text-xs font-bold uppercase text-muted-foreground mb-2">
              Question {currentQ + 1} of {mockQuestions.length}
            </p>

            <AnimatePresence mode="wait">
              <motion.h2
                key={currentQ}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="text-xl md:text-2xl font-bold leading-snug flex-1"
              >
                {mockQuestions[currentQ]}
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM CONTROL BAR */}
        <div className="bg-background neo-border-thick neo-shadow-lg p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="flex gap-2">
            {!isTextOnly && (
              <>
                <button
                  onClick={toggleMic}
                  className={`w-12 h-12 neo-border neo-shadow neo-hover flex items-center justify-center ${
                    micOn ? "bg-success" : "bg-destructive"
                  }`}
                >
                  {micOn ? <Mic className="w-5 h-5 text-success-foreground" /> : <MicOff className="w-5 h-5 text-destructive-foreground" />}
                </button>
                <button
                  onClick={toggleCam}
                  className={`w-12 h-12 neo-border neo-shadow neo-hover flex items-center justify-center ${
                    camOn ? "bg-success" : "bg-destructive"
                  }`}
                >
                  {camOn ? <Camera className="w-5 h-5 text-success-foreground" /> : <CameraOff className="w-5 h-5 text-destructive-foreground" />}
                </button>
              </>
            )}
          </div>

          <input
            type="text"
            value={textAnswer}
            onChange={(e) => {
              setTextAnswer(e.target.value);
              if (qStatus === "listening") setQStatus("recording");
            }}
            placeholder="Type your answer here..."
            className="flex-1 px-4 py-3 neo-border bg-background font-semibold placeholder:text-muted-foreground focus:outline-none focus:neo-shadow"
          />

          <button
            onClick={handleSubmitAnswer}
            disabled={qStatus === "processing"}
            className="px-6 py-3 bg-neo-purple text-neo-purple-foreground neo-border neo-shadow font-bold uppercase tracking-wider neo-hover flex items-center gap-2 disabled:opacity-50 justify-center"
          >
            <Send className="w-4 h-4" />
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIInterview;
