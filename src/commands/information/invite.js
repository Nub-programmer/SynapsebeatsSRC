/**
 * Axon Innova - Atharv
 * https://dsc.gg/axoninnova
 * give credits or ill touch you in your dreams
 */
import { Command } from '../../structures/Command.js';
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { embedManager } from '../../managers/EmbedManager.js';
import { logger } from '../../utils/logger.js';

/**

 * Ping command to check bot latency

 */

class InviteCommand extends Command {
  constructor() {
    super({
      name: 'invite',
      description: 'Want SynapseBeats in your server? Use this command to add me!',
      usage: 'invite',
      aliases: ['inv', 'add'],
      category: 'information',
      cooldown: 1
    });
  }

  /**
   * Execute the ping command
   * @param {object} options - Command options
   * @returns {Promise<void>}
   */

  async execute({ message, client }) {
   try {
       const inviteButton = new ButtonBuilder()

        .setLabel('Invite Link')     .setURL('https://dsc.gg/axoninnova')
        .setStyle(ButtonStyle.Link);
       

       const supportServer = new ButtonBuilder()

        .setLabel('Support Server')     .setURL('https://dsc.gg/axoninnova')

        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder().addComponents(inviteButton, supportServer);
   
      await message.reply({ content: `[Invite SynapseBeats](https://dsc.gg/axoninnova)`, components: [row] });
       } catch (error) {
      logger.error('InviteCommand', 'Error executing invite command', error);
     }      
   }
 }
 
export default new InviteCommand();
