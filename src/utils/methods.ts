import moment from 'moment';

const getTimeDifference = createdAt => {
  console.log(createdAt);
  const now = moment();
  const createdTime = moment(createdAt);
  console.log(now, 'now', createdTime, 'c');
  const duration = moment.duration(now.diff(createdTime));

  if (duration.asSeconds() < 60) {
    return `${Math.floor(duration.asSeconds())}s`;
  } else if (duration.asMinutes() < 60) {
    return `${Math.floor(duration.asMinutes())}m`;
  } else if (duration.asHours() < 24) {
    return `${Math.floor(duration.asHours())}h`;
  } else if (duration.asDays() < 30) {
    return `${Math.floor(duration.asDays())}d`;
  } else if (duration.asMonths() < 12) {
    return `${Math.floor(duration.asMonths())}mo`;
  } else {
    return `${Math.floor(duration.asYears())}y`;
  }
};

export default getTimeDifference;
