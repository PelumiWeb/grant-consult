import { useQuery, useMutation, UseQueryOptions, UseMutationOptions, QueryKey, MutationFunction } from "@tanstack/react-query";
import { apiInstance } from "../../../../lib/api/Api";

export const useApiQuery = <T>(
  key: QueryKey,
  path: string,
  options?: UseQueryOptions<T, Error>
) => {
  return useQuery<T, Error>({
    queryKey: key,
    queryFn: async () => {
      const response = await apiInstance.get<T>(path);
      return response;
    },
    staleTime: Number,

    ...options,
  });
};

// import { useMutation, UseMutationOptions } from "@tanstack/react-query";
// import { apiInstance } from "../../../../lib/api/Api";

export const useApiMutation = <T, R = Record<string, unknown>>(
  method: "post" | "put" | "delete",
  path: string,
  options?: UseMutationOptions<T, unknown, R>
) => {
  // Define the mutation function with explicit typing
  const mutationFn: MutationFunction<T, R> = async (data: R) => {
    const response = await apiInstance[method]<T>(path, data);
    return response;
  };

  return useMutation<T, unknown, R>({
    mutationFn,
    ...options, // Spread additional options like onSuccess, onError, etc.
  });
};
