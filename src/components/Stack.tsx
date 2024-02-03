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
              width={97}
              height={97}
              alt="stack-image"
              src="/assets/stack/js_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={111}
              height={126}
              alt="stack-image"
              src="/assets/stack/html_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={107}
              height={121}
              alt="stack-image"
              src="/assets/stack/node_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={122}
              height={108}
              alt="stack-image"
              src="/assets/stack/reactjs_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={88}
              height={195}
              alt="stack-image"
              src="/assets/stack/mongo_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={126}
              height={76}
              alt="stack-image"
              src="/assets/stack/tailwind_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={91}
              height={91}
              alt="stack-image"
              src="/assets/stack/blade_.png"
            />
          </div>
          <div className="stack-item">
            {" "}
            <Image
              width={121}
              height={96}
              alt="stack-image"
              src="/assets/stack/vue_.png"
            />
          </div>
          <div className="stack-item">
            <Image
              width={119}
              height={119}
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
