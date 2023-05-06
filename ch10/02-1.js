const isNotEligibleForDisability = anEmployee => {
  if (anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime) return 0
}

const disabilityAmount = anEmployee => {
  return isNotEligibleForDisability(anEmployee);
  // 장애 수당 계산
}
