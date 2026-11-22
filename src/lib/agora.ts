// Agora RTC Live Video + Audio integration helper for SOFT LIFE
export interface AgoraConfig {
  appId: string;
  channel: string;
  token: string | null;
  uid: number;
}

export class AgoraManager {
  private appId: string;
  private channel: string;
  private isConnected: boolean = false;

  constructor(appId: string = 'softlife-agora-app-id-demo') {
    this.appId = appId;
    this.channel = 'soft-life-live-room';
  }

  public async joinChannel(channelName: string): Promise<boolean> {
    this.channel = channelName;
    this.isConnected = true;
    console.log(`[Agora RTC] Joined channel: ${this.channel} with App ID: ${this.appId}`);
    return true;
  }

  public async leaveChannel(): Promise<void> {
    this.isConnected = false;
    console.log(`[Agora RTC] Left channel: ${this.channel}`);
  }

  public getStatus() {
    return {
      connected: this.isConnected,
      channel: this.channel,
      appId: this.appId,
      audioActive: true,
      videoActive: true
    };
  }
}

export const agoraManager = new AgoraManager();
