import React, { useState, useEffect } from 'react';

export function validatePassword(password1: string, password2: string) {
    if (password1.length >= 8)
    {
        if(password1 === password2)
        {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}