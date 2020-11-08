package com.pm.taxdefaultertracking.activity;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.view.View;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

import com.pm.taxdefaultertracking.R;

public class OtpActivity extends AppCompatActivity {
    public static OtpActivity instance;
    public EditText et1;
    public EditText et2;
    public EditText et3;
    public EditText et4;
    public EditText et5;
    public EditText et6;
    private View view;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_otp);
        instance = this;
        et1 = instance.findViewById(R.id.editText1);
        et2 = instance.findViewById(R.id.editText2);
        et3 = instance.findViewById(R.id.editText3);
        et4 = instance.findViewById(R.id.editText4);
        et5 = instance.findViewById(R.id.editText5);
        et6 = instance.findViewById(R.id.editText6);
    }

    public void afterTextChanged(Editable editable) {
        // TODO Auto-generated method stub
        String text = editable.toString();
        switch(view.getId())
        {
            case R.id.editText1:
                if(text.length()==1) {
                    et2.requestFocus();
                }
                break;
            case R.id.editText2:
                if(text.length()==1)
                    et3.requestFocus();
                else if(text.length()==0)
                    et1.requestFocus();
                break;
            case R.id.editText3:
                if(text.length()==1)
                    et4.requestFocus();
                else if(text.length()==0)
                    et2.requestFocus();
                break;
            case R.id.editText4:
                if(text.length()==1)
                    et5.requestFocus();
                if(text.length()==0)
                    et3.requestFocus();
                break;
            case R.id.editText5:
                if(text.length()==1)
                    et6.requestFocus();
                if(text.length()==0)
                    et4.requestFocus();
                break;
            case R.id.editText6:
            if(text.length()==0)
                et5.requestFocus();
            break;
        }
    }
}
