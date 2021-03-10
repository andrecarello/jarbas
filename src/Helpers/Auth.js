import { CLUSTERS } from '../config/Settings';

/**
* Verifica se o usuário tem acesso a oferta
*
* @param offerCluster
* @returns {boolean}
*/
export const offerPermission = (offerCluster) => {
	const { cluster } = _.model('auth');
	return cluster >= parseInt(offerCluster)
};

/**
* Verifica se o usuário é CONTROLE ou EXCLUSIVO
 *
 * @returns {boolean}
 */
export const isClient = () => {
	const cluster = _.model('auth').cluster;
	return cluster >= CLUSTERS.controle;
};

export const isClientExclusive = () => {
	const cluster = _.model('auth').cluster;
	return cluster >= CLUSTERS.exclusivo;
};
