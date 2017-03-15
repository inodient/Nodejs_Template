function userInfo( userName, userId, dept, emailAddress ){
  this.userName = userName;
  this.userId = userId;
  this.dept = dept;
  this.emailAddress = emailAddress;
}

userInfo.prototype.getUserInfo = function(){
  return this.userName + " " + this.userId + " " + this.dept + " " + this.emailAddress;
}

function partInfo( partName, partId, partLeaderId ){
  this.partName = partName;
  this.partId = partId;
  this.partLeaderId = partLeaderId;
}

function systemInfo( systemName, systemId, ownerId, adminId ){
  this.systemName = systemName;
  this.systemId = systemId;
  this.ownerId = ownerId;
  this.adminId = adminId;
}




function weeklyReport( startDate, endDate, weeklyResult, plan, workingSchedule ){
  this.startDate = startDate;
  this.endDate = endDate;
  this.weeklyResult = weeklyResult;
  this.plan = plan;
  this.workingSchedule = workingSchedule;
}

function weeklyResult( systemId, managementCount, results, issues ){
  this.systemId = systemId;
  this.managementCount = managementCount;
  this.results = results;
  this.issues = issues;
}

function plan( systemId, plans, issues ){
  this.systemId = systemId;
  this.plans = plans;
  this.issues = issues;
}

function workingSchedule( userId, startDate, endDate, schdule ){
  this.userId = userId;
  this.startDate = startDate;
  this.endDate = endDate;
  this.schedule = schedule;
}



// UserInfo
var changhoKang = new userInfo( "Changho Kang", "changho1.kang", "EBS", "changho1.kang@doosan.com" );
var minjaelee = new userInfo( "Minjae Lee", "minjae2.lee", "EBS", "minjae2.lee@doosan.com" );

// DeptInfo
var EBSPart = new partInfo( "EBS", "PLM_Incheon_EBS", "changho1.kang" );

// systemInfo
var epts = new systemInfo( "EPTS", "plm_ebs_epts", "changoh1.kang", "changho1.kang" );

// Calc Date
function calcStartDate(){
  var startDate = new Date();

  var dayNum = startDate.getDay();
  if( dayNum <= 3 ){
    startDate.setDate( startDate.getDate() - (dayNum + 3) );
  } else{
    startDate.setDate( startDate.getDate() - 4 );
  }

  return startDate;
}

function calcEndDate(){
  var endDate = new Date();

  var dayNum = endDate.getDay();
  if( dayNum <= 3 ){
    endDate.setDate( endDate.getDate() + (3 - dayNum) );
  } else{
    endDate.setDate( endDate.getDate() + (7 - dayNum + 3) );
  }

  return endDate;
}

console.log( calcStartDate().toString() );
console.log( calcEndDate().toString() );

// console.log( today.getDate() );
// console.log( today.getDay() );
// console.log( today.getMonth() );
// console.log( today.getFullYear() );
