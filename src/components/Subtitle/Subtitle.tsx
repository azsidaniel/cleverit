import { FC } from "react";
import { SubtitleStyled } from "./Subtitle.styled";

type SubtitleProps = {
  subtitle: string;
};

export const Subtitle: FC<SubtitleProps> = ({ subtitle }) => {
  return <SubtitleStyled>{subtitle}</SubtitleStyled>;
};
