// import { Project } from '@prisma/client';

export type ProfileCardData = {
  email: string;
  bio: string | null;
  firstName: string | null;
  lastName: string | null;
  picture: string | null;
  experience: string | null;
  // projects: Project[];
  schedule: string[] | null;
  nextSession: string | null;
};
