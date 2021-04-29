import Image from "next/image";
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default styled.div`
  width: 26.5rem;
  height: 100vh;
  padding: 3rem 4rem;

  background: var(--purple-500);
  color: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Footer = styled.footer`
  align-self: stretch;
  &.empty {
    opacity: 0.5;
  }
`;

export const StrongText = styled.strong`
  font-family: Lexend, sans-serif;
  font-weight: 600;
`;

export const EmptyPlayer = styled.header`
  width: 100%;
  height: 20rem;

  border: 1.5px dashed var(--purple-300);
  border-radius: 1.5rem;

  background: linear-gradient(
    143.8deg,
    rgba(145, 100, 250, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  padding: 4rem;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }
`;

export const SliderContainer = styled.div`
  flex: 1;
`;

export const PlayerSlider = styled(Slider)``;

export const EmptySlider = styled.div`
  width: 100%;
  height: 4px;
  background: var(--purple-300);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;
`;

const StyledButton = styled.button`
  background: transparent;
  border: 0;
  font-size: 0;
  transition: filter 0.2s;

  &:disabled {
    cursor: default;
  }

  &:hover:not(:disabled) {
    filter: brightness(0.8);
  }
`;

export const ShuffleButton = styled(StyledButton)``;

export const PlayPreviousButton = styled(StyledButton)``;

export const PlayButton = styled(StyledButton)`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: var(--purple-400);

  &:hover:not(:disabled) {
    filter: brightness(0.95);
  }
`;

export const PlayNextButton = styled(StyledButton)``;

export const RepeatButton = styled(StyledButton)``;

export const FilledPlayer = styled.div`
  text-align: center;
`;

export const PlayingImage = styled(Image)`
  border-radius: 1.5rem;
`;

export const PlayingTitle = styled.strong`
  display: block;
  margin-top: 2rem;
  font: 600 1.25rem Lexand, sans-serif;
  line-height: 1.75rem;
`;

export const PlayingMembers = styled.span`
  display: block;
  margin-top: 1rem;
  opacity: 0.6;
  line-height: 1.5rem;
`;
