import Container from "./Container";
import FlexCol from "./FlexCol";

const Header = () => {
  return(
    <div className="w-full h-[125px] bg-p-purple-full">
       <Container percentageX={80}>
           <FlexCol justifyContent="justify-start">
                <div className="w-full h-full">Home/Header/top</div>
                <div className="w-full h-full">Home/Header/bottom</div>                
           </FlexCol>
       </Container>
    </div>
  );
}

export default Header;