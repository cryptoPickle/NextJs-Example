import Header from "../components/header";
import withMui from "../shared/MUI/withMUI";
import { Card, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import Link from "next/link";
import "isomorphic-fetch";

const Post = ({ title, content }) => (
  <div>
    <Header />
    <Card>
      <CardHeader title={title} />
      <CardText>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <RaisedButton fullWidth={true} primary={true}>
          <Link href="/" as="/blog">
            <a
              style={{
                textDecoration: "none",
                fontSize: "18px",
                color: "white"
              }}
            >
              Go back to blog!
            </a>
          </Link>
        </RaisedButton>
      </CardText>
    </Card>
  </div>
);

Post.getInitialProps = async ({ query: { id } }) => {
  const resposne = await fetch(
    `${process.env.BLOGGER_URL}/${id}?key=${process.env.API_KEY}`
  );
  const data = await resposne.json();
  const title = data.title;
  const content = data.content;
  return { title, content };
};

export default withMui(Post);
