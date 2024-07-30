export type ImageGenerationHistory = {
  createdAt: Date;
  generatedImageUrl: string | null;
  id: string;
  parametersUsed: string | null;
  promptDescription: string | null;
  updatedAt: Date;
};
