import UserMutation from './user';
import DeptMutation from './dept';
import ApplicantMutation from './applicant';
import BatchMutation from './batch';
import GroupMutation from './group';
import SectMutation from './sect';
import vacantMutation from './vacant';



export default {
 ...UserMutation, ...DeptMutation, ...ApplicantMutation, ...BatchMutation,...GroupMutation,...SectMutation,...vacantMutation
};
