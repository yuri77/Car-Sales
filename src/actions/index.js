export const addFeature = feature => {
  console.log("action creator was invoked");
  return { type: "ADD_FEATURE", payload: feature };
};
