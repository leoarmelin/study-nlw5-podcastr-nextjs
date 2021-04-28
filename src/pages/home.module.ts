import styled from "styled-components";
import Image from "next/image";

export default styled.div`
  padding: 4rem;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;
`;

export const LatestEpisodesContainer = styled.section`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    li {
      background-color: var(--white);
      border: 1px solid var(--gray-100);
      padding: 1.25rem;
      border-radius: 1.5rem;
      position: relative;

      display: flex;
      align-items: center;
    }
  }
`;

export const ThumbImage = styled(Image)`
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
`;

export const Title = styled.h2`
  margin: 3rem 0 1.5rem 0;
`;

export const EpisodeDetailsContainer = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

export const EpisodeTitle = styled.a`
  display: block;
  color: var(--gray-800);
  font-family: Lexend, sans-serif;
  font-weight: 600;
  text-decoration: none;
  line-height: 1.4rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const EpisodeMembers = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EpisodeText = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.875rem;

  &:last-child {
    margin-left: 0.5rem;
    padding-left: 0.5rem;
    position: relative;

    &::before {
      content: "";
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background-color: #bbb;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 2rem;

  width: 2.5rem;
  height: 2.5rem;
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 0.675rem;
  font-size: 0;
`;

export const PlayButtonImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  &:hover {
    filter: brightness(0.95);
  }
`;

export const AllEpisodes = styled.section`
  padding-bottom: 2rem;
`;

export const Table = styled.table`
  width: 100%;

  th,
  td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--gray-100);
  }

  th {
    color: var(--gray-200);
    text-transform: uppercase;
    font: 500 0.75rem Lexand, sans-serif;
    text-align: left;
  }

  td {
    font-size: 0.875rem;
  }
`;

export const SmallThumbImage = styled(Image)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
`;

export const PodcastTitle = styled.a`
  color: var(--gray-800);
  font-family: Lexand, sans-serif;
  font-weight: 600;
  text-align: none;
  line-height: 1.4rem;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const SmallPlayButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 0.5rem;
  font-size: 0;
`;

export const SmallPlayButtonImage = styled.img`
  width: 1.25rem;
  height: 1.25rem;

  &:hover {
    filter: brightness(0.95);
  }
`;
