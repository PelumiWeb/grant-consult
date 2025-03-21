import { useQuery, useMutation, UseQueryOptions, UseMutationOptions, QueryKey, MutationFunction } from "@tanstack/react-query";
import { apiInstance } from "../../../../lib/api/Api";
import { useAppSelector } from "../../../../lib/hooks";

export const useApiQuery = <T>(
  key: QueryKey,
  path: string,
  options?: UseQueryOptions<T, Error>
) => {
     const token = useAppSelector((state) => state.user.token);

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
  method: "post" | "put" | "delete" | "patch",
  path: string,
  options?: UseMutationOptions<T, unknown, R>
) => {
   const token = useAppSelector((state) => state.user.token);

  const mutationFn: MutationFunction<T, R> = async (data: any) => {
     
    try {
       const response:any = await apiInstance[method]<T>(path, data);
          return response ; // Ensure type compatibility
    } catch (error) {
       console.log(error, "Error from Mutation");
      throw error;
      
    }
   
  };

  return useMutation<T, unknown, R>({
    mutationFn,
    ...options,
  });
};

