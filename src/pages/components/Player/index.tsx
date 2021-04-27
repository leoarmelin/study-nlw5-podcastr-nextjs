import {
  Header,
  PlayerContainer,
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
  Slider,
} from "./styled.module";

export default function Player() {
  return (
    <PlayerContainer>
      <Header>
        <img src="/playing.svg" alt="Tocando agora" />
        <StrongText>Tocando agora</StrongText>
      </Header>

      <EmptyPlayer>
        <StrongText>Selecione um podcast para ouvir</StrongText>
      </EmptyPlayer>

      <Footer className="empty">
        <Progress>
          <span>00:00</span>
          <Slider>
            <EmptySlider />
          </Slider>
          <span>00:00</span>
        </Progress>

        <ButtonsContainer>
          <ShuffleButton type="button">
            <img src="/shuffle.svg" alt="Embaralhar" />
          </ShuffleButton>
          <PlayPreviousButton type="button">
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </PlayPreviousButton>
          <PlayButton type="button">
            <img src="/play.svg" alt="Tocar" />
          </PlayButton>
          <PlayNextButton type="button">
            <img src="/play-next.svg" alt="Tocar próxima" />
          </PlayNextButton>
          <RepeatButton type="button">
            <img src="/repeat.svg" alt="Repetir" />
          </RepeatButton>
        </ButtonsContainer>
      </Footer>
    </PlayerContainer>
  );
}
