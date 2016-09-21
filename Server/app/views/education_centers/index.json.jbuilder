json.education_centers @education_centers do |education_center|
  json.name       education_center.name
  json.address    education_center.address
  json.phone      education_center.phone
  json.email      education_center.email
  json.site       education_center.site
  json.info       education_center.info
end