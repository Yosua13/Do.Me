import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const { isDarkMode, toggleDarkMode, colors } = useTheme();
  const settingsStyle = createSettingsStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyle.section}
    >
      <Text style={settingsStyle.sectionTitle}>Preferences</Text>

      {/* DARK MODE */}

      <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingsStyle.settingIcon}
          >
            <Ionicons name="moon" size={18} color="#FFF" />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"#FFF"}
          trackColor={{ false: colors.border, true: colors.primary }}
        />
      </View>

      {/* NOTIFICATIONS */}

      <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={settingsStyle.settingIcon}
          >
            <Ionicons name="notifications" size={18} color="#FFF" />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>Notifications</Text>
        </View>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={() =>
            setIsNotificationsEnabled(!isNotificationsEnabled)
          }
          thumbColor={"#FFF"}
          trackColor={{ false: colors.border, true: colors.warning }}
        />
      </View>

      {/* AUTO SYNC */}

      <View style={settingsStyle.settingItem}>
        <View style={settingsStyle.settingLeft}>
          <LinearGradient
            colors={colors.gradients.success}
            style={settingsStyle.settingIcon}
          >
            <Ionicons name="sync" size={18} color="#FFF" />
          </LinearGradient>
          <Text style={settingsStyle.settingText}>Auto Sync</Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={() => setIsAutoSync(!isAutoSync)}
          thumbColor={"#FFF"}
          trackColor={{ false: colors.border, true: colors.success }}
        />
      </View>
    </LinearGradient>
  );
};

export default Preferences;
