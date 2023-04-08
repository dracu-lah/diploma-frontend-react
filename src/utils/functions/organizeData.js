export const organizeData = (jsonData) => {
  const organizedData = [];

  jsonData.forEach((data) => {
    const newData = organizedData.find(
      (item) => item.registerNumber === data["register number"]
    );

    if (newData) {
      newData.courses.push({
        course: data["course"],
        examType: data["exam type"],
        attendance: data["attendance"],
        withheld: data["withheld"],
        internalMark: data["internal mark"],
        grade: data["grade"],
        result: data["result"],
      });
    } else {
      organizedData.push({
        registerNumber: data["register number"],
        studentName: data["student name"],
        branch: data["branch"],
        semester: data["semester"],
        courses: [
          {
            course: data["course"],
            examType: data["exam type"],
            attendance: data["attendance"],
            withheld: data["withheld"],
            internalMark: data["internal mark"],
            grade: data["grade"],
            result: data["result"],
          },
        ],
      });
    }
  });
  return organizedData;
};
