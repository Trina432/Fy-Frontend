import apiClient from "./api-client";

export interface Campaign {
  id: string;
  organization_id: string;
  title: string;
  description: string | null;
  required_skills: string[];
  preferred_skills: string[];
  min_experience_years: number;
  max_experience_years: number | null;
  education_requirement: string | null;
  salary_range_min: number | null;
  salary_range_max: number | null;
  location: string | null;
  is_remote: boolean;
  cutoff_score: number;
  created_at: string;
  updated_at: string;
}

export interface CampaignCreate {
  title: string;
  description?: string | null;
  required_skills?: string[];
  preferred_skills?: string[];
  min_experience_years?: number;
  max_experience_years?: number | null;
  education_requirement?: string | null;
  salary_range_min?: number | null;
  salary_range_max?: number | null;
  location?: string | null;
  is_remote?: boolean;
  cutoff_score?: number;
}

export interface CampaignUpdate extends Partial<CampaignCreate> {}

export const campaignApi = {
  listCampaigns: async (): Promise<Campaign[]> => {
    const response = await apiClient.get("/campaigns/");
    return response.data;
  },

  createCampaign: async (data: CampaignCreate): Promise<Campaign> => {
    const response = await apiClient.post("/campaigns/", data);
    return response.data;
  },

  getCampaign: async (id: string): Promise<Campaign> => {
    const response = await apiClient.get(`/campaigns/${id}`);
    return response.data;
  },

  updateCampaign: async (id: string, data: CampaignUpdate): Promise<Campaign> => {
    const response = await apiClient.patch(`/campaigns/${id}`, data);
    return response.data;
  },
};
