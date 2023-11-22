type TAny = ReturnType<JSON.values>;

interface ISvgComponentProps {
  width?: string | number;
  height?: string | number;
  color?: string;
  viewBox?: string;
  opacity?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

interface IComponent<T = {}> extends React.FC<React.PropsWithChildren<T>> {}
interface ISvgComponent<T = {}> extends IComponent<ISvgComponentProps & T> {}
interface IFilterControllerComponent<T = {}> extends IComponent<TFilterControllerProps & T> {}

// type TNextPage = import('next').NextPage<{ params: { lang: import('../i18n-config').Locale } }>;

type TNextPage<T = unknown> = import('next').NextPage<{
  params: { lang: import('../i18n-config').Locale } & T;
}>;
