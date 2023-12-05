import { ProjectENV } from '@env';

export const getFlowerApi = async (id: string) => {
  await fetch(`${ProjectENV.NEXT_PUBLIC_APP_ENDPOINT}/api/flowers?id=${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

export const getListFlowersApi = async () => {
  const res = await fetch(`${ProjectENV.NEXT_PUBLIC_APP_ENDPOINT}/api/flowers`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
  return res;
};
