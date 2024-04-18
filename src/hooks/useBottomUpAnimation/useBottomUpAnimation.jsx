
export const useBottomUpAnimation = () => {

  const variants = {
    hidden: {
      y: 100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return { variants };
};
