/**
 * Google Tag Manager Integration
 * Tracks user interactions and quiz progress through GTM
 */

/**
 * This function can be used to ensure the dataLayer exists.
 * The GTM snippet in index.html handles the main initialization.
 */
export const initGTM = () => {
  // This is a safeguard in case the GTM script fails to load.
  if (typeof window !== 'undefined' && !window.dataLayer) {
    window.dataLayer = [];
  }
};

/**
 * Track events in GTM
 * @param {string} eventName - The name of the event
 * @param {object} eventData - Additional data to send with the event
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    const eventPayload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...eventData
    };
    window.dataLayer.push(eventPayload);

    // Also log to console in development
    if (import.meta.env.DEV) {
      console.log(`[GTM Event] ${eventName}:`, eventPayload);
    }
  }
};

/**
 * Track page views
 * @param {string} pageName - Name of the page
 * @param {string} pagePath - Path of the page
 */
export const trackPageView = (pageName, pagePath) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_path: pagePath
  });
};

/**
 * Track quiz funnel stages
 * @param {number} stageNumber - The stage number in the funnel
 * @param {object} stageData - Additional stage data
 */
export const trackFunnelStage = (stageNumber, stageData = {}) => {
  trackEvent(`funnel_stage_${stageNumber}`, {
    funnel_stage: stageNumber,
    ...stageData
  });
};

/**
 * Track quiz completion
 * @param {number} totalQuestions - Total questions in the quiz
 * @param {object} results - Quiz results data
 */
export const trackQuizCompletion = (totalQuestions, results) => {
  trackEvent('quiz_completed', {
    total_questions: totalQuestions,
    ...results
  });
};
