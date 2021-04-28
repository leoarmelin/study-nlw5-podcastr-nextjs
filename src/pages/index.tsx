import { GetStaticProps } from "next";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import api from "../services/api";
import convertDurationToTimeString from "../utils/convertDurationToTimeString";

import HomeContainer, {
  AllEpisodes,
  EpisodeDetailsContainer,
  LatestEpisodesContainer,
  PlayButton,
  Title,
  EpisodeTitle,
  EpisodeMembers,
  EpisodeText,
  PlayButtonImage,
  ThumbImage,
  SmallThumbImage,
  Table,
  PodcastTitle,
  SmallPlayButton,
  SmallPlayButtonImage,
} from "./home.module";

interface Episode {
  id: string;
  title: string;
  members: string;
  publishedAt: Date;
  thumbnail: string;
  url: string;
  duration: number;
  durationAsString: string;
  file: string;
}

interface HomeProps {
  latestEpisodes: Episode[];
  allEpisodes: Episode[];
}

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
  return (
    <HomeContainer>
      <LatestEpisodesContainer>
        <Title>Últimos lançamentos</Title>

        <ul>
          {latestEpisodes.map((episode) => {
            return (
              <li key={episode.id}>
                <ThumbImage
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                />

                <EpisodeDetailsContainer>
                  <Link href={`/episodes/${episode.id}`}>
                    <EpisodeTitle>{episode.title}</EpisodeTitle>
                  </Link>
                  <EpisodeMembers>{episode.members}</EpisodeMembers>
                  <EpisodeText>{episode.publishedAt}</EpisodeText>
                  <EpisodeText>{episode.durationAsString}</EpisodeText>
                </EpisodeDetailsContainer>

                <PlayButton type="button">
                  <PlayButtonImage src="/play-green.svg" alt="Tocar episódio" />
                </PlayButton>
              </li>
            );
          })}
        </ul>
      </LatestEpisodesContainer>

      <AllEpisodes>
        <h2>Todos os episódios</h2>

        <Table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allEpisodes.map((episode) => {
              return (
                <tr key={episode.id}>
                  <td style={{ width: 72 }}>
                    <SmallThumbImage
                      width={120}
                      height={120}
                      src={episode.thumbnail}
                      alt={episode.title}
                      objectFit="cover"
                    />
                  </td>
                  <td>
                    <Link href={`/episodes/${episode.id}`}>
                      <PodcastTitle>{episode.title}</PodcastTitle>
                    </Link>
                  </td>
                  <td>{episode.members}</td>
                  <td style={{ width: 100 }}>{episode.publishedAt}</td>
                  <td>{episode.durationAsString}</td>
                  <td>
                    <SmallPlayButton type="button">
                      <SmallPlayButtonImage
                        src="/play-green.svg"
                        alt="Tocar episódio"
                      />
                    </SmallPlayButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </AllEpisodes>
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("episodes", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    },
  });

  const episodes = data.map((episode) => {
    return {
      id: episode.id,
      title: episode.title,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), "d MMM yy", {
        locale: ptBR,
      }),
      thumbnail: episode.thumbnail,
      file: episode.file,
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(
        Number(episode.file.duration)
      ),
      url: episode.file.url,
    };
  });

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8, // 8 hours
  };
};
