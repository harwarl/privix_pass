import {
  VerifyMasterPasswordPayload,
  VerifySignaturePayload,
} from "@/data/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import "dotenv/config";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const useGetSession = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("sessions");
      return data;
    },
  });
};

export const useGetSignMessage = (address: string) => {
  return useQuery({
    queryKey: ["message", address],
    queryFn: async () => {
      if (!address) {
        throw new Error("Missing Parameters when getting sign Message");
      }
      const { data } = await axiosInstance.get(`auth/get-message/${address}`);
      return data;
    },
    enabled: !!address,
  });
};

export const useVerifySignature = () => {
  return useMutation({
    mutationFn: async (verifySignaturePayload: VerifySignaturePayload) => {
      try {
        const { data } = await axiosInstance.post(
          `auth/verify-signature`,
          verifySignaturePayload
        );

        return { data };
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          throw new Error(error.response?.data?.message || "Unknown error");
        } else {
          throw new Error("An unexpected error occurred");
        }
      }
    },
    onMutate: () => {
      console.log("Verifying Signature");
    },
    onError: (error: any) => {
      console.log("Error verifying signature, try again");
    },
  });
};

export const useVerifyMasterPassword = () => {
  return useMutation({
    mutationFn: async (
      verifyMasterPasswordPayload: VerifyMasterPasswordPayload
    ) => {
      try {
        const { data } = await axiosInstance.post(
          `auth/verify-masterpassword`,
          verifyMasterPasswordPayload
        );

        return { data };
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          throw new Error(error.response?.data?.message || "Unknown error");
        } else {
          throw new Error("An unexpected error occurred");
        }
      }
    },
    onMutate: () => {
      console.log("Verifying master password");
    },
    onError: (error: any) => {
      console.log("Error verifying master password, try again");
    },
  });
};

export const useSetMasterPassword = () => {
  return useMutation({
    mutationFn: async (password: string) => {
      try {
        const { data } = await axiosInstance.post(
          "settings/set-master-password",
          {
            password,
          }
        );

        return data;
      } catch (error) {
        if (error instanceof AxiosError) {
          throw new Error(error.response?.data?.message || "Unknown error");
        } else {
          throw new Error("An unexpected error occurred");
        }
      }
    },
    onMutate: () => {
      console.log("Setting Master Password");
    },
    onError: (error: any) => {
      console.log("Error setting Master password, try again");
    },
  });
};

export const useSetSettings = () => {
  return useMutation({
    mutationFn: async (settings: any) => {
      try {
        const { data } = await axiosInstance.post("settings", settings);

        return data;
      } catch (error) {
        if (error instanceof AxiosError) {
          throw new Error(error.response?.data?.message || "Unknown error");
        } else {
          throw new Error("An unexpected error occurred");
        }
      }
    },
    onMutate: () => {
      console.log("Setting Master Password");
    },
    onError: (error: any) => {
      console.log("Error setting Master password, try again");
    },
  });
};
