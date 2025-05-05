// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Apr 2025
// This file contains the JS functions for index.html



function enterClicked() {
  const aLength = parseFloat(document.getElementById('a-length').value)
  const bLength = parseFloat(document.getElementById('b-length').value)
  const cLength = parseFloat(document.getElementById('c-length').value)

  // using the cosine law

const aAngle = Math.acos((bLength**2 + cLength**2 - aLength**2) / (2 * bLength * cLength)) * (180/Math.PI)
const bAngle = Math.acos((cLength**2 + aLength**2 - bLength**2) / (2 * cLength * aLength)) * (180/Math.PI)
const cAngle = Math.acos((aLength**2 + bLength**2 - cLength**2) / (2 * aLength * bLength)) * (180/Math.PI)

const sumOfAngles = Number((aAngle).toFixed(2)) + Number((bAngle).toFixed(2)) + Number((cAngle).toFixed(2))

  if (sumOfAngles == 180) {
    if ((aLength == bLength) && (aLength == cLength)) {
      document.getElementById("answer").innerHTML =
      'This is an equilateral  triangle!'
    } else if ((aAngle == bAngle) || (aAngle == cAngle) || (bAngle == cAngle)) {
      document.getElementById("answer").innerHTML =
      'This is an isosceles triangle!'
    } else if ((aAngle != bAngle) || (aAngle != cAngle) || (bAngle != cAngle)) {
      document.getElementById("answer").innerHTML =
      'This is a scalene triangle!'
    } else {
      document.getElementById("answer").innerHTML =
      'You should not be here!'
    }
  } else {
    document.getElementById("answer").innerHTML =
    'This is not a triangle!'
  }
}
