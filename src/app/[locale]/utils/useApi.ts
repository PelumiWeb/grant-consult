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

export const useApiMutation = <
  T extends unknown,
  R = Record<string, unknown>
>(
  method: "post" | "put" | "delete",
  path: string,
  options?: UseMutationOptions<T, unknown, R>
) => {
  const mutationFn: MutationFunction<T, R> = async (data: any) => {
    const response:any = await apiInstance[method]<T>(path, data);
    return response?.data as T; // Ensure type compatibility
  };

  return useMutation<T, unknown, R>({
    mutationFn,
    ...options,
  });
};

