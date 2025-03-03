import { useState, useEffect } from "react";
import WordPressBlogCard from "../cards/WordPressBlogCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import content from "../../content/content";

function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://public-api.wordpress.com/rest/v1.1/sites/blogtestepaper.wordpress.com/posts/"
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.posts)) // Ajustado para pegar a chave correta
      .catch((error) => console.error("Erro ao buscar posts:", error));
  }, []);

  return (
    <div>
      <SectionArea className="bg-bgSectionDark" paddingtop={false}>
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.steps.miniTag}
            sectionHeaderTitle={content.texts.steps.title}
            sectionHeaderSubtitle={content.texts.steps.subtitle}
            color=""
            type=""
          />
          <ul className="flex flex-wrap gap-[30px]  justify-center">
            {posts.map((post) => (
              <li key={post.ID}>
                <WordPressBlogCard
                  img={
                    post.featured_image && (
                      <img
                        src={post.featured_image}
                        alt="Imagem do post"
                        className="rounded-2xl"
                      />
                    )
                  }
                  title={
                    <h3 dangerouslySetInnerHTML={{ __html: post.title }} />
                  }
                  subtitle={
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  }
                  link={
                    <a
                      href={post.URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ler mais
                    </a>
                  }
                />
              </li>
            ))}
          </ul>
        </SectionWrapper>
      </SectionArea>
    </div>
  );

  // return (
  //   <div>
  //     <WordPressBlogCard />
  //     <h2>Últimas postagens</h2>
  //     <ul>
  //       {posts.map((post) => (
  //         <li key={post.ID}>
  //           <h3 dangerouslySetInnerHTML={{ __html: post.title }} />
  //           <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
  //           {post.featured_image && (
  //             <img src={post.featured_image} alt="Imagem do post" width="300" />
  //           )}
  //           <a href={post.URL} target="_blank" rel="noopener noreferrer">
  //             Ler mais
  //           </a>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default BlogPosts;
