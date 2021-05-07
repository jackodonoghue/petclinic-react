import json

ting=[
  [
    "Linda",
    "Douglas",
    "dentistry"
  ],
  [
    "Helen",
    "Leary",
    "radiology"
  ],
  [
    "Henry",
    "Stevens",
    "radiology"
  ],
  [
    "Linda",
    "Douglas",
    "surgery"
  ],
  [
    "Rafael",
    "Ortega",
    "surgery"
  ]
]

print(type(ting))
l={}
for row in range(len(ting)):
  l[row]={'Name': ting[row][0] + ' ' + ting[row][1], 'Speciality': ting[row][2]}




print(json.dumps(l))
