export const useVoidAnimation = () => {
  const variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return { variants };
};
