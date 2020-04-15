import UserQuery from './user';
import ApplicantQuery from './applicant';
import BatchQuery from './batch';
import DeptQuery from './dept';
import GroupQuery from './dept';
import QuestionQuery from './question';
import VacantQuery from './vacant';

export default {
  ...UserQuery,
  ...ApplicantQuery,
  ...BatchQuery,
  ...DeptQuery,
  ...GroupQuery,
  ...QuestionQuery,
  ...VacantQuery
};
