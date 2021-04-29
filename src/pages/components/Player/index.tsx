import { useContext, useEffect, useRef } from "react";
import { PlayerContext } from "../../../contexts/PlayerContext";
import PlayerContainer, {
  Header,
  EmptyPlayer,
  StrongText,
  Footer,
  Progress,
  EmptySlider,
  ButtonsContainer,
  ShuffleButton,
  PlayPreviousButton,
  PlayButton,
  PlayNextButton,
  RepeatButton,
  FilledPlayer,
  PlayingImage,
  PlayingTitle,
  PlayingMembers,
  SliderContainer,
  PlayerSlider,
} from "./styles";

export default function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState,
  } = useContext(PlayerContext);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const episode = episodeList[currentEpisodeIndex];

  return (
    <PlayerContainer>
      <Header>
        <img src="/playing.svg" alt="Tocando agora" />
        <StrongText>Tocando agora {episode?.title}</StrongText>
      </Header>

      {episode ? (
        <FilledPlayer>
          <PlayingImage
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <PlayingTitle>{episode.title}</PlayingTitle>
          <PlayingMembers>{episode.members}</PlayingMembers>
        </FilledPlayer>
      ) : (
        <EmptyPlayer>
          <StrongText>Selecione um podcast para ouvir</StrongText>
        </EmptyPlayer>
      )}

      <Footer className={!episode ? "empty" : ""}>
        <Progress>
          <span>00:00</span>
          <SliderContainer>
            {episode ? (
              <PlayerSlider
                trackStyle={{ backgroundColor: "#04d361" }}
                railStyle={{ backgroundColor: "#9f75ff" }}
                handleStyle={{ borderColor: "#04d361", borderWidth: 4 }}
              />
            ) : (
              <EmptySlider />
            )}
          </SliderContainer>
          <span>00:00</span>
        </Progress>

        {episode && (
          <audio
            src={episode.url}
            ref={audioRef}
            autoPlay
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
          />
        )}

        <ButtonsContainer>
          <ShuffleButton type="button" disabled={!episode}>
            <img src="/shuffle.svg" alt="Embaralhar" />
          </ShuffleButton>
          <PlayPreviousButton type="button" disabled={!episode}>
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </PlayPreviousButton>
          <PlayButton
            type="button"
            disabled={!episode}
            onClick={() => togglePlay()}
          >
            {isPlaying ? (
              <img src="/pause.svg" alt="Tocar" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}
          </PlayButton>
          <PlayNextButton type="button" disabled={!episode}>
            <img src="/play-next.svg" alt="Tocar próxima" />
          </PlayNextButton>
          <RepeatButton type="button" disabled={!episode}>
            <img src="/repeat.svg" alt="Repetir" />
          </RepeatButton>
        </ButtonsContainer>
      </Footer>
    </PlayerContainer>
  );
}
