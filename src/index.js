import { WeekPlannerCard } from './card';
import { WeekPlannerCardEditor } from "./editor";
import { version } from '../package.json';

customElements.define(
    'week-planner-card-tailored',
    WeekPlannerCard
);

window.customCards = window.customCards || [];
window.customCards.push({
    type: 'week-planner-card-tailored',
    name: 'Week Planner Card',
    description: 'Card to display events for a number of days from one or several calendars.'
});

customElements.define(
    'week-planner-card-tailored-editor',
    WeekPlannerCardEditor
);

console.info(
    `%c week-planner-card-tailored %c v${version} `,
    'color: white; background: black; font-weight: 700;',
    'color: black; background: white; font-weight: 700;',
);