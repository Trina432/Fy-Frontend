import { useState } from "react";
import { Upload, FileText, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f) simulateUpload(f);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) simulateUpload(f);
  };

  const simulateUpload = (f: File) => {
    setFile(f);
    setUploading(true);
    setProgress(0);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 25;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setUploading(false);
      }
      setProgress(Math.min(p, 100));
    }, 300);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold font-mono mb-2">Upload Resume</h1>
        <p className="text-muted-foreground font-semibold mb-10">
          Drop your resume and let AI do the rest
        </p>

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="neo-border-thick border-dashed p-16 text-center cursor-pointer neo-hover bg-muted/30"
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="font-bold text-lg mb-1">Drag & Drop your resume</p>
          <p className="text-sm text-muted-foreground font-semibold">PDF, DOCX up to 10MB</p>
          <input
            id="file-input"
            type="file"
            className="hidden"
            accept=".pdf,.docx"
            onChange={handleChange}
          />
        </div>

        {file && (
          <div className="mt-6 neo-border neo-shadow p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neo-blue neo-border flex items-center justify-center">
                  <FileText className="w-5 h-5 text-neo-blue-foreground" />
                </div>
                <div>
                  <p className="font-bold text-sm">{file.name}</p>
                  <p className="text-xs text-muted-foreground font-semibold">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              <button onClick={() => { setFile(null); setProgress(0); }} className="neo-hover">
                <X className="w-5 h-5" />
              </button>
            </div>
            <Progress
              value={progress}
              className="h-4 neo-border [&>div]:bg-success"
            />
            <p className="mt-2 text-xs font-bold text-right">
              {uploading ? `${Math.round(progress)}%` : "✓ Uploaded"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeUpload;
