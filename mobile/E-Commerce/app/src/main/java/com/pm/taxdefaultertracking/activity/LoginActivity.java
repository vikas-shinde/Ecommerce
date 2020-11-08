package com.pm.taxdefaultertracking.activity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

import com.pm.taxdefaultertracking.R;

public class LoginActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
    }

    public void onCkickLoginButton(View view) {
        startActivity(new Intent(LoginActivity.this, OtpActivity.class));
        finish();
    }
}
