import { batches, Batch } from "@/data/classes";

export interface RecommendationInput {
  ageGroup: string;
  skillLevel: string;
  goal: string;
}

function normalizeAgeRange(range: string) {
  const cleaned = range.replace("+", "-").split("-");
  const min = Number.parseInt(cleaned[0], 10);
  const max = cleaned[1] ? Number.parseInt(cleaned[1], 10) : Number.POSITIVE_INFINITY;

  return {
    min: Number.isNaN(min) ? 0 : min,
    max: Number.isNaN(max) ? Number.POSITIVE_INFINITY : max,
  };
}

function goalMatches(batch: Batch, goal: string) {
  if (goal === "Fitness") {
    return ["Ladies Batch", "Hip-Hop", "Self-Defence"].includes(batch.style);
  }

  if (goal === "Stage") {
    return ["Hip-Hop", "Bollywood", "Contemporary"].includes(batch.style);
  }

  return ["Bollywood", "Kids Batch"].includes(batch.style);
}

export function recommendBatch(input: RecommendationInput): Batch {
  const { ageGroup, skillLevel, goal } = input;
  const userAge = normalizeAgeRange(ageGroup);

  let recommendedBatches = batches.filter((batch) => {
    const batchAge = normalizeAgeRange(batch.ageGroup);
    const ageMatch = userAge.min >= batchAge.min && userAge.min <= batchAge.max;
    const levelMatch = batch.level === "All Levels" || batch.level === skillLevel;

    return ageMatch && levelMatch && goalMatches(batch, goal);
  });

  if (recommendedBatches.length === 0) {
    recommendedBatches = [...batches].sort((a, b) => a.seatsLeft - b.seatsLeft);
  }

  return recommendedBatches[0];
}
