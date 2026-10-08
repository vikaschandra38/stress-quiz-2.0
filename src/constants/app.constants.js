export const EMAIL_WEBHOOK = "https://hook.us2.make.com/97c6s1fkr79zo4dgerexyu7kt9cyn1dn";

export const PAGE_LINKS = {
  reviews: {
    next: "/email",
  },
  email: {
    next: "/results",
    previous: "/reviews",
  },
  results: {
    // next: "/score",
    previous: "/email",
  },
/*   score: {
    next: "/course-intro",
    previous: "/results",
  },
  courseIntro: {
    next: "/course-detail",
    previous: "/score",
  },
  courseDetail: {
    next: "/testimonials",
    previous: "/course-intro",
  },
  testimonials: {
    next: "/buy-now",
    previous: "/course-detail",
  },
  buyNow: {
    next: "https://hglsuudvr9swcreslyyu.app.clientclub.net/courses/offers/17fe2caf-d8f7-429a-ac5d-dbb919e3a6a1",
  }, */
};
