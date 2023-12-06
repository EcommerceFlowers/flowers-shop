import { SupabaseClient } from '@supabase/supabase-js';

export const getFlowerById = async (id: string, client: SupabaseClient) => {
  return client.from('flowers').select().eq('flower_id', id);
};

export const getListFlowerByIds = async (ids: number[], client: SupabaseClient) => {
  return client.from('flowers').select().in('flower_id', ids);
};

export const getAllFlowers = (client: SupabaseClient) => {
  return client.from('flowers').select();
};

export const getFlowersWithLimit = (limit: number, client: SupabaseClient) => {
  return client.from('flowers').select().limit(limit);
};
