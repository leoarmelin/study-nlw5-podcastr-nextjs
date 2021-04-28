import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import api from "../../services/api";
import convertDurationToTimeString from "../../utils/convertDurationToTimeString";

import EpisodeContainer, {
  ArrowLeftButton,
  ArrowLeftImg,
  ThumbnailContainer,
  Thumbnail,
  PlayButton,
  PlayButtonImg,
  Header,
  Title,
  Text,
  DescriptionContainer,
} from "./styles";

interface Episode {
  id: string;
  title: string;
  members: string;
  publishedAt: Date;
  thumbnail: string;
  description: string;
  url: string;
  duration: number;
  durationAsString: string;
  file: string;
}

interface EpisodeProps {
  episode: Episode;
}

export default function Episode({ episode }: EpisodeProps) {
  return (
    <EpisodeContainer>
      <ThumbnailContainer>
        <Link href="/">
          <ArrowLeftButton>
            <ArrowLeftImg src="/arrow-left.svg" alt="Voltar" />
          </ArrowLeftButton>
        </Link>

        <Thumbnail
          width={700}
          height={160}
          src={episode.thumbnail}
          objectFit="cover"
        />

        <PlayButton type="button">
          <PlayButtonImg src="/play.svg" alt="Tocar episódio" />
        </PlayButton>
      </ThumbnailContainer>

      <Header>
        <Title>{episode.title}</Title>
        <Text>{episode.members}</Text>
        <Text>{episode.publishedAt}</Text>
        <Text>{episode.durationAsString}</Text>
      </Header>

      <DescriptionContainer
        dangerouslySetInnerHTML={{ __html: episode.description }}
      />
    </EpisodeContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { data } = await api.get(`/episodes/${slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), "d MMM yy", {
      locale: ptBR,
    }),
    thumbnail: data.thumbnail,
    description: data.description,
    file: data.file,
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    url: data.file.url,
  };

  return {
    props: { episode },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
