import { FC } from "react";
import { TitleStyled } from "./Title.styled";

type TitleProps = {
  title: string;
};

export const Title: FC<TitleProps> = ({ title }) => {
  return <TitleStyled>{title}</TitleStyled>;
};
