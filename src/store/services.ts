import axios from "axios";

import { LoginType, UserType, RegisterType } from "./users/types";
import { TrainingsType } from "./trainings/types";

export const baseURL = "https://learn-app-backend.onrender.com";

export const authAPI = {
  login: async (credentials: LoginType) => {
    try {
      return axios.post(`${baseURL}/auth/login`, credentials);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },
  register: async (credentials: RegisterType) => {
    try {
      return await axios.post(`${baseURL}/auth/register`, credentials);
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },
  logOut: async (token: string) => {
    try {
      return await axios.post(
        `${baseURL}/auth/logout`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },
};

export const userAPI = {
  getUserInfo: async (userName: string, token: string) => {
    try {
      const result = await axios.get(`${baseURL}/api/users/${userName}`, {
        headers: {
          Authorization: token,
        },
      });
      return result;
    } catch (error) {
      console.error("Registration error:", error);
    }
  },
  updateUserOnServer: async (
    ID: string,
    credentials: UserType,
    token: string
  ) => {
    try {
      return await axios.put(`${baseURL}/api/users/${ID}`, credentials, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  },
  addPhotoOnServer: async (formData: FormData, token: string) => {
    try {
      await axios.post(`${baseURL}/upload`, formData, {
        headers: {
          Authorization: token,
        },
      });
      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file: ", error);
    }
  },
  deleteUserFromTheServer: async (ID: string, token: string) => {
    try {
      return await axios.delete(`${baseURL}/api/users/${ID}`, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Deleting user error:", error);
      throw error;
    }
  },
};

export const studentsAPI = {
  fetchAllStudents: async (token: string) => {
    try {
      const response = await axios.get(`${baseURL}/api/students`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching students:", error);
      throw error;
    }
  },
  updateStudentOnServer: async (
    ID: string,
    credentials: any,
    token: string
  ) => {
    try {
      return await axios.put(`${baseURL}/api/students/${ID}`, credentials, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Error updating student:", error);
    }
  },
};

export const trainersAPI = {
  fetchAllTrainers: async (token: string) => {
    try {
      const response = await axios.get(`${baseURL}/api/trainers`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching trainers:", error);
      throw error;
    }
  },
  updateTrainerOnServer: async (
    ID: string,
    credentials: any,
    token: string
  ) => {
    try {
      return await axios.put(`${baseURL}/api/trainers/${ID}`, credentials, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Error updating trainer:", error);
    }
  },
};

export const trainingsAPI = {
  fetchAllTrainings: async (token: string) => {
    try {
      const response = await axios.get(`${baseURL}/api/trainings`, {
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching trainings:", error);
      throw error;
    }
  },
  addTrainingToServer: async (credentials: TrainingsType, token: string) => {
    try {
      return await axios.post(`${baseURL}/api/trainings`, credentials, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Error adding training:", error);
      throw error;
    }
  },
};

export const specializationsAPI = {
  fetchAllSpecializations: async () => {
    try {
      const response = await axios.get(`${baseURL}/api/specializations`);
      return response.data;
    } catch (error) {
      console.error("Error fetching specializations:", error);
      throw error;
    }
  },
};

export const trainingTypesAPI = {
  fetchAllTrainingTypes: async () => {
    try {
      const response = await axios.get(`${baseURL}/api/trainingTypes`);
      return response.data;
    } catch (error) {
      console.error("Error fetching training types:", error);
      throw error;
    }
  },
};
