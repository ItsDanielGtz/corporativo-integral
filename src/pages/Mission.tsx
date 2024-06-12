import { Separator } from "@/components/ui/separator";
import logo from "../assets/images/LogoKYM.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Mission() {
  return (
    <>
      <div
        className="relative w-full h-full bg-cover bg-center bg-no-repeat blur-sm"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>
      <div className="absolute right-60 top-40 bg-gris">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Mission</CardTitle>
            <Separator />
          </CardHeader>
          <CardContent>
            <p>
              To Provide international markets with Mexican products of the
              highest quality through planning, coordination and professional
              logistic systems.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Mission;
