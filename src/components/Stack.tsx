import Image from "next/image";
import React from "react";

type Props = {};

const Stack = (props: Props) => {
  return (
    <section id="stack" className="stacks-section">
      <div className="container">
        <div className="stack-title">Technologies I work with</div>
        <div className="stack-body">
          <div className="stack-item">
            <Image
              width={77}
              height={77}
              alt="stack-image"
              src="/assets/stack/js_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={81}
              height={96}
              alt="stack-image"
              src="/assets/stack/html_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={77}
              height={91}
              alt="stack-image"
              src="/assets/stack/node_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={82}
              height={78}
              alt="stack-image"
              src="/assets/stack/reactjs_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={58}
              height={165}
              alt="stack-image"
              src="/assets/stack/mongo_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={86}
              height={46}
              alt="stack-image"
              src="/assets/stack/tailwind_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={61}
              height={61}
              alt="stack-image"
              src="/assets/stack/blade_.png"
            />
          </div>
          <div className="stack-item">
            {" "}
            <Image
              width={81}
              height={66}
              alt="stack-image"
              src="/assets/stack/vue_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={79}
              height={79}
              alt="stack-image"
              src="/assets/stack/next_.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
