import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import HeaderContainer from "./styled.module";

export default function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <HeaderContainer>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </HeaderContainer>
  );
}
