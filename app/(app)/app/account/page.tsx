import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";

export default function Page() {
  return (
    <main>
      <H1 className="my-8">Your Account</H1>

      <ContentBlock>
        <p>Logged in as.....</p>
      </ContentBlock>
    </main>
  )
}