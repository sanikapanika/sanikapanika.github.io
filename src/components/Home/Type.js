import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Backend developer",
          "Spring, Symfony, Elixir ninja",
          "Linux master",
          "Kubernetes enthusiast",
          "I use Arch btw"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
