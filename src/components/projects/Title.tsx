import { FC } from "react";

interface IProps {
  header: string;
}

const Title: FC<IProps> = ({ header }: IProps) => {
  return (
    <div className="flex flex-col gap-2 mt-8 sm:mt-28">
      <p>Projects</p>
      <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl">{header}</h3>
      <div className="rounded-xl border-2 border-primary w-28 mt-2" />
    </div>
  );
};

export default Title;
